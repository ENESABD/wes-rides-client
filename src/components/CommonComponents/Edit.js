import React, { useEffect, useState } from 'react';
import useFormWithRequest from '../../hooks/useFormWithRequest';
import ChangePassword from './ChangePassword';
import ChooseDate from './ChooseDate';
import ChooseTags from './ChooseTags';
import ErrorMessage from './ErrorMessage';
import InputItem from './InputItem';
import Loading from './Loading';

function Edit({ inputObject, prevValue, formType, requestUrl, formattingFunction }) {
    const [values, handleChange, handleSubmit, response, errorMessage, requestInProcess] = 
        useFormWithRequest('PUT', requestUrl, formattingFunction);
    
    const [isOpened, setIsOpened] = useState(false);

    const handleOpen = () => {
        setIsOpened((prev) => !prev);
    }

    useEffect(() => {
        if (response?.success) {
            setIsOpened(false);
        }
    }, [response])

    return (
        <div>
            <button onClick={handleOpen} className='btn btn-success my-2'>
                {isOpened ? <div>Cancel</div> : 
                (formType === 'password-update') ? <div>Change Password</div> :
                <div>Edit</div>}
            </button>
            {(formType === 'password-update' && (response?.success && !isOpened)) && 
                <p>Password has been updated.<br/></p>}
            {isOpened ? 
            <form onSubmit={handleSubmit}>
                {formType === 'single-input' && 
                    <InputItem 
                        inputObject={inputObject}
                        prevValue={prevValue}
                        value={values[inputObject.name]}
                        handleChange={handleChange}
                    />
                }

                {formType === 'password-update' && 
                    <ChangePassword
                        values={values}
                        handleChange={handleChange}
                    />
                }

                {formType === 'dates' && 
                    <ChooseDate
                        values={values}
                        prevValues={prevValue}
                        handleChange={handleChange}
                    />
                }

                {formType === 'tags' && 
                    <ChooseTags
                        tags={prevValue}
                        isDisabled={false}
                    />
                }

                <button type="submit" className='btn btn-primary mb-2'>Submit</button>
                <ErrorMessage error={errorMessage}/>
                <Loading loading={requestInProcess}/>
            </form>
            : null}
        </div>
    )
}

export default Edit;