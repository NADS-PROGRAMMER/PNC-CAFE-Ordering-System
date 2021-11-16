import React from 'react'

function ErrorAlert({errorMessage}) {
    return (
        <div className="alert alert-error max-w-md w-full">
            <div className="flex gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>{errorMessage}</p>
            </div>
        </div>
    )
}

export default ErrorAlert
