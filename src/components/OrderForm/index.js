import { Form, Field } from "react-final-form";

import "./index.scss"

const onSubmit = (data) => {
    window.alert(JSON.stringify(data));
};

const OrderForm = () => {

    let formData = {
        name: "",
        surname: "",
        adress: "",
        phone: ""
    }
    return (
        <div className="orderForm">
            <Form onSubmit={onSubmit}
                initialValues={{
                    ...formData,
                }}
                render={({ handleSubmit, form }) => (
                    <form onSubmit={handleSubmit} className="form">
                        <div>
                            <Field
                                name="name"
                                component="input"
                                type="text"
                                placeholder="NAME"
                            />
                        </div>
                        <div>
                            <Field
                                name="surname"
                                component="input"
                                type="text"
                                placeholder="SURNAME"
                            />
                        </div>
                        <div>
                            <Field
                                name="adress"
                                component="input"
                                type="text"
                                placeholder="ADRESS"
                            />
                        </div>
                        <div>
                            <Field
                                name="phone"
                                component="input"
                                type="tel"
                                placeholder="PHONE"
                            />
                        </div>
                        <button type="submit" className="submitBtn">
                            Submit
                        </button>
                    </form>
                )}
            />
        </div>
    )
}

export default OrderForm;