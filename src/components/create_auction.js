import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';

export default function CreateAuction() {

    const [name, setOnChangeName] = useState('');
    const [theme, setOnChangeTheme] = useState('');
    const [age, setOnChangeAge] = useState('');
    const [pieces, setOnChangePieces] = useState('');
    const [item_number, setOnChangeItemNumber] = useState('');
    const [description, setOnChangeDescription] = useState('');
    const [minimum_bid, setOnChanngeMinimumBid] = useState('');
    const [image, setImageData] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const auctionVar = {
            theme, name, age, pieces, item_number, description, minimum_bid, image
        }

        //let url = 'http://localhost:5000/api/add';
        let url = 'https://project-fs-backend.vercel.app/api/add';

        axios
            .post(url, auctionVar)
            .then((res) => {
                window.location = '/';
            });
    };

    const handleSelectImage = (event) => {
        const file = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
            setImageData(fileReader.result);
        });
        fileReader.readAsDataURL(file);
    }

    return (
        <div>
            <Navbar />
            <div style={{ padding: '1rem' }}>
                <h3>Create New Auction</h3>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <div className='form-group'>
                            <label>Name: </label>
                            <input
                                type='text'
                                required
                                className='form-control'
                                name='name'
                                value={name}
                                onChange={(e) => setOnChangeName(e.target.value)}
                            />
                            <label>Theme: </label>
                            <input
                                type='text'
                                required
                                className='form-control'
                                name='theme'
                                value={theme}
                                onChange={(e) => setOnChangeTheme(e.target.value)}

                            />
                            <label>Age: </label>
                            <input
                                type='text'
                                required
                                className='form-control'
                                name='age'
                                value={age}
                                onChange={(e) => setOnChangeAge(e.target.value)}
                            />
                            <label>Pieces: </label>
                            <input
                                type='text'
                                required
                                className='form-control'
                                name='pieces'
                                value={pieces}
                                onChange={(e) => setOnChangePieces(e.target.value)}
                            />
                            <label>Item Number: </label>
                            <input
                                type='text'
                                required
                                className='form-control'
                                name='item_number'
                                value={item_number}
                                onChange={(e) => setOnChangeItemNumber(e.target.value)}
                            />
                            <label>Description: </label>
                            <input
                                type='text'
                                required
                                className='form-control'
                                name='description'
                                value={description}
                                onChange={(e) => setOnChangeDescription(e.target.value)}
                            />
                            <label>Minimum bid: </label>
                            <input
                                type='text'
                                required
                                className='form-control'
                                name='minimum_bid'
                                value={minimum_bid}
                                onChange={(e) => setOnChanngeMinimumBid(e.target.value)}
                            />
                            <label>Image: </label>
                            <input
                                type="file"
                                onChange={handleSelectImage}
                                className='form-control'
                            />
                            
                            <input
                                type='submit'
                                value='Create Auction'
                                className='btn btn-primary'
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}