import React, { useState } from 'react';

const Home = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		msg: '',
	});

	const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
		e.preventDefault();

		fetch('./api/mail', {
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
		<div className='w-full h-screen flex justify-center items-center'>
			<div className='w-2/4'>
				<form action='' className='w-full'>
					<label className='block mb-5 ' htmlFor='name'>
						Name
					</label>
					<input
						onChange={(e) => {
							const val = e.currentTarget.value;
							setForm((props) => ({
								...props,
								name: val !== null ? val : '',
							}));
						}}
						className='block w-full p-2 border-b border-solid border-slate-400 mb-10  focus:outline-none focus:border-sky-500 '
						value={form.name}
						type='name'
						name='name'
						id='name'
					/>
					<label className='block mb-5 ' htmlFor='email'>
						Email
					</label>
					<input
						onChange={(e) => {
							const val = e.currentTarget.value;
							setForm((props) => ({
								...props,
								email: val !== null ? val : '',
							}));
						}}
						className='block p-2 w-full border-b border-solid border-slate-400 mb-10 focus:outline-none focus:border-sky-500 '
						value={form.email}
						type='email'
						name='email'
						id='email'
					/>
					<label className='block mb-5 ' htmlFor='message'>
						Message
					</label>
					<textarea
						onChange={(e) => {
							const val = e.currentTarget.value;
							setForm((props) => ({
								...props,
								msg: val !== null ? val : '',
							}));
						}}
						className='block p-2 w-full border-b border-solid border-slate-400 focus:outline-none focus:border-sky-500 '
						value={form.msg}
						name='message'
						id='massage'></textarea>
					<input
						onClick={async (e) => {
							await handleSubmit(e);
						}}
						type='submit'
						value='送信'
						className='mt-5 border border-solid border-blue-400 text-lg py-1 px-3 rounded-lg hover:bg-blue-400 hover:text-white'
					/>
				</form>
			</div>
		</div>
	);
};

export default Home;
