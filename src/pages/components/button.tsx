import { Button } from '@mui/material';
import React, { ReactNode, useState } from 'react';

const ButtonComponents = ({ children }: { children: ReactNode }) => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		msg: '',
	});

	const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault();

		fetch('/api/mail', {
			method: 'POST',
			body: JSON.stringify({
				name: form.name,
				email: form.email,
				msg: form.msg,
			}),
		})
			.then((res) => {
				console.log('Response received');
				if (res.status === 200) {
					console.log('Response succeeded!');
				} else {
					console.log(`Error: Status Code ${res.status}`);
				}
			})
			.catch((e) => {
				console.log(`Error: ${e}`);
			});
	};
	return (
		<div>
			<Button
				onClick={async (e) => {
					await handleSubmit(e);
				}}
				type='submit'
				value='SUBMIT'
				variant='outlined'>
				Primary
			</Button>
		</div>
	);
};

export default ButtonComponents;
