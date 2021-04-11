import React from 'react'

export const Loading = React.memo(() => {
	return (
        <div className="loadingBox">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    );
});
