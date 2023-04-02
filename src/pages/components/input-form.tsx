import { Input, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import React, { ReactNode, useState } from 'react';

type Form = {
	id: string | undefined;
	children: ReactNode | undefined;
};

const InputForm = ({ id, children }: Form) => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		msg: '',
	});

	if (id === 'content') {
		return (
			<div className='w-full'>
				<FormControl className=' w-full'>
					<InputLabel htmlFor={id} className='text-xl'>
						{children}
					</InputLabel>
					<Input
						onChange={(e) => {
							const val = e.currentTarget.value;
							setForm((props) => ({
								...props,
								name: val !== null ? val : '',
							}));
						}}
						value={form.name}
						id={id}
						name={id}
						aria-describedby='my-helper-text'
						className='text-xl'
						multiline
						minRows={2}
						type='text'
					/>
				</FormControl>
			</div>
		);
	}

	return (
		<div className='w-full'>
			<FormControl className=' w-full'>
				<InputLabel htmlFor={id} className='text-xl'>
					{children}
				</InputLabel>
				<Input
					onChange={(e) => {
						const val = e.currentTarget.value;
						setForm((props) => ({
							...props,
							name: val !== null ? val : '',
						}));
					}}
					value={form.name}
					name={id}
					id={id}
					aria-describedby='my-helper-text'
					className='text-xl'
					type={id}
				/>
			</FormControl>
		</div>
	);
};

export default InputForm;
