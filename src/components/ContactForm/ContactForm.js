import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import './ContactForm.css'

// EmailJS credentials go here
const serviceId = ''
const templateId = ''
const userId = ''

const ContactForm = () => {
    // Useful hooks for the form tag in React
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()

    // Creates a toast
    const toastifySuccess = () => {
        toast('Form sent!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,  
            draggable: false,
            className: 'submit-feedback-success',
            toastId: 'notifyToast'
        })
    }

    // Sends the form input data to EmailJS, clears input boxes, 
    // and displays toast on success
    const onSubmit = async (data) => {
        const { name, email, subject, message } = data
    
        try {
            const templateParams = {name, email, subject, message}
            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                userId
            )
            reset()
            toastifySuccess()
        } catch (e) {
            console.log(e)
            }
    }

    return (
        <div className='contact-form-div'>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Name and email row of form */}
                <div className='flex-row'>
                    <div>
                        <input
                        type='text'
                        name='name'
                        {...register('name', {
                            required: { value: true, message: 'Please enter your name' },
                            maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                            }
                        })}
                        className='input-field'
                        placeholder='Name'
                        ></input>
                        {errors.name && (<span className='error-message'>{errors.name.message}</span>)}
                    </div>
                    <div>
                        <input
                        type='email'
                        name='email'
                        {...register('email', {
                            required: true,
                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })}
                        className='input-field'
                        placeholder='Email Address'
                        ></input>
                        {errors.email && (<span className='error-message'>Please enter a valid email address.</span>)}
                    </div>
                </div>
                {/* Subject form of form */}
                <div>
                    <input
                    type='text'
                    name='subject'
                    {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                        value: 75,
                        message: 'Subject cannot exceed 75 characters'
                        }
                    })}
                    className='input-field'
                    placeholder='Subject'
                    ></input>
                    {errors.subject && (<span className='error-message'>{errors.subject.message}</span>)}
                </div>
                {/* Message row of form */}
                <div>
                    <textarea
                    rows={3}
                    name='message'
                    {...register('message', {
                        required: true
                    })}
                    className='input-field'
                    placeholder='Message'
                    ></textarea>
                    {errors.message && (<span className='error-message'>Please enter a message.</span>)}
                </div>
                <div className='flex-row'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}
  
  export default ContactForm;