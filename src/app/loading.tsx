import React from 'react';

const loading = () => {
    return (
        <div className="fixed inset-0 z-[9999] bg-[#101014] flex flex-col items-center justify-center">
            <span className="loading loading-spinner text-success"></span>
        </div>
    );
};

export default loading;