import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTrashAlt,
	faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';

const style = {
	position: 'absolute',
	top: '30%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function BasicModal(props) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	useEffect(() => {
		setFirstName(props.firstName);
		setLastName(props.lastName);
	}, [props.firstName, props.lastName]);
	return (
		<div>
			<Button className="text-white" onClick={handleOpen}>
				<FontAwesomeIcon icon={faTrashAlt} />
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						<h1 className="flex justify-center">
							<FontAwesomeIcon
								className="text-red-500 bg-red-200 rounded-full p-2 mr-4"
								icon={faTriangleExclamation}
							/>
							Are you sure you want to delete {firstName} {lastName}?
						</h1>
					</Typography>
					<div className='flex justify-center pt-6'>
						<Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1">Yes</Button>
						<Button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1">No</Button>
					</div>
					{/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography> */}
				</Box>
			</Modal>
		</div>
	);
}
