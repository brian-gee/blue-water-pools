import { useState, useEffect } from 'react';
import { addCustomer } from '../firebase/initFirebase';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { tailwindStyles } from './tailwindStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPenToSquare,
	faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 500,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function EditModal(props: {
	props: {
		first_name: string;
		last_name: string;
		email: string;
		address: string;
		invoice: number;
		id: number;
	};
}) {
	const [customer, setCustomer] = useState(props.props);
	const [firstName, setFirstName] = useState(customer.first_name);
	const [lastName, setLastName] = useState(customer.last_name);
	const [email, setEmail] = useState(customer.email);
	const [address, setAddress] = useState(customer.address);
	const [invoice, setInvoice] = useState(customer.invoice);
	var [id, setId] = useState(customer.id);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<>
			<Button className="text-white" onClick={handleOpen}>
				<FontAwesomeIcon icon={faPenToSquare} />
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						<div className="flex justify-center">
							{/* Edit Customer Form */}
							<form className="rounded-lg shadow-lg p-8">
								<h1 className="text-2xl flex justify-center pb-5">
									Edit customer
								</h1>
								<div className="grid grid-cols-2 gap-4">
									<div className="form-group mb-5">
										<label>First</label>
										<input
											type="text"
											className={tailwindStyles.formItem}
											placeholder="First name"
											value={firstName}
											onChange={(e) => setFirstName(e.target.value)}
										/>
									</div>
									<div className="form-group mb-5">
										<label>Last</label>
										<input
											type="text"
											className={tailwindStyles.formItem}
											placeholder="Last name"
											value={lastName}
											onChange={(e) => setLastName(e.target.value)}
										/>
									</div>
								</div>
								<div className="form-group mb-5">
									<label>Address</label>
									<input
										type="address"
										className={tailwindStyles.formItem}
										placeholder="Address"
										value={address}
										onChange={(e) => setAddress(e.target.value)}
									/>
								</div>
								<div className="form-group mb-5">
									<label>Email</label>
									<input
										type="email"
										className={tailwindStyles.formItem}
										placeholder="Email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<div className="form-group mb-5">
									<label>Invoice</label>
									<input
										type="number"
										className={tailwindStyles.formItem}
										placeholder="Invoice"
										value={invoice}
										onChange={(e) => setInvoice(parseInt(e.target.value))}
									/>
								</div>
								<div className="">
									<button
										onClick={() => {
											addCustomer(
												firstName,
												lastName,
												email,
												address,
												invoice,
												id
											);
										}}
										className={tailwindStyles.btn}
									>
										Save
									</button>
								</div>
							</form>
						</div>
					</Typography>
					{/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography> */}
				</Box>
			</Modal>
		</>
	);
}
