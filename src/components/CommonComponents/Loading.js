import React from 'react';

function Loading({ loading }) {
  return (
    <>
        {loading &&
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        }
    </>
  )
}

export default Loading;