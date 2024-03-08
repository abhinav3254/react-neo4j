import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import './DialogBox.scss'
import { Button } from 'primereact/button';

function DialogBox({ visible, setVisible, onSubmit }) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');

    const submit = () => {
        const data = {
            id: id,
            position: { x: 0, y: 0 },
            data: {
                label: name
            }
        };
        onSubmit(data);
    };

    return (
        <div>
            <Dialog header="Node" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <div className="card flex justify-content-center">
                    <InputText value={id} onChange={(e) => setId(e.target.value)} placeholder='id' className='input' />
                    <InputText value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='input' />
                    <Button icon="pi pi-check" onClick={submit} />
                </div>
            </Dialog>
        </div>
    );
}

export default DialogBox;