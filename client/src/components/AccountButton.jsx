import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { FETCH_PLAID_DATA } from '../utils/mutations';
import { USER } from '../utils/queries';
import Button from '@mui/material/Button';

function AccountButton() {
    const [fetchPlaidData] = useMutation(FETCH_PLAID_DATA);
    const { loading, error, data } = useQuery(USER);

    const handleButtonClick = async () => {
        if (!loading && !error && data && data.user && data.user.plaidAccessToken) {
            await fetchPlaidData({
                variables: {
                    accessToken: data.user.plaidAccessToken
                }
            });
            window.location.reload();
        }
    }

    return (
        <div>
        {data && data.user && data.user.plaidAccessToken && (
        <Button variant='contained' onClick={handleButtonClick} disableElevation>
            Update Account Data
        </Button>
        )}
        </div>
    );
}

export default AccountButton;