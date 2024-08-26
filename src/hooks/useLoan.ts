import { useCallback, useMemo, useState } from "react";
import { FormDataType, LoanProductTypes } from "../constants/Types";
import useFetch from "../api";
import { useDispatch } from "react-redux";
import { setConfirmDialog } from "../redux/slices/ConfirmDialog";
import { currencyFormatter } from "../helpers";
import { setModalState } from "../redux/slices/modalState";

// Initial form state
const initialFormState: FormDataType = { fname: '', email: '', amount: 0, purpose: '' };

export const useLoan = () => {
    const dispatch = useDispatch();
    const { fetchData } = useFetch();

    // State for managing form data, errors, and loan products
    const [formData, setFormData] = useState<FormDataType>(initialFormState);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loanProducts, setLoanProducts] = useState<LoanProductTypes[] | null>(null);

    // Handler for updating form data
    const handleChange = (field: string, value: string) => setFormData(prev => ({ ...prev, [field]: value }));

    // Function to handle loan application process
    const handleLoanApplication = useCallback(() => {
        const data = {
            full_name: formData.fname,
            email: formData.email,
            loan_amount: formData.amount,
            loan_purpose: formData.purpose,
        };
        const text = `You are about to apply for a loan of ${currencyFormatter(formData.amount)}. Press proceed to apply.`;

        // Trigger confirmation modal using Redux
        dispatch(setConfirmDialog({
            isVisible: true,
            text,
            okayBtn: 'PROCEED',
            cancelBtn: 'Cancel',
            severity: true,
            response: async (res: boolean) => {
                if (res) {
                    const response = await fetchData({ endPoint: 'apply-loan', method: 'POST', data });
                    
                    // Display success status in a modal
                    dispatch(setModalState({
                        isVisible: true,
                        headerText: 'SUCCESS STATUS',
                        data: { message: response?.data?.message, status: response?.status === 201 }
                    }));

                    // Reset form after successful application
                    setFormData(initialFormState);
                }
            }
        }));
    }, [dispatch, fetchData, formData]);

    // Function to fetch loan products
    const getLoanProducts = useCallback(async () => {
        const data = {
            query: `{ loanProducts { id name interestRate maximumAmount } }`,
        };
        const response = await fetchData({ endPoint: 'graphql', method: 'POST', data });

        if (response?.data && response?.status === 200) {
            setLoanProducts(response.data?.data?.loanProducts as LoanProductTypes[]);
        }
    }, [fetchData]);

    const memoizedData = useMemo(() => ({
        formData,
        errors,
        setErrors,
        handleChange,
        handleLoanApplication,
        getLoanProducts,
        loanProducts,
    }), [formData, errors, handleChange, handleLoanApplication, getLoanProducts, loanProducts]);

    return memoizedData;
};
