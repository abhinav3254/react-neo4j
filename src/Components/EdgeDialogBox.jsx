import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import './EdgeDialogBox.scss'

function EdgeDialogBox({ visible, setVisible }) {

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div>
            <div>
                <Dialog header="Node" visible={visible} style={{ width: '50vw', height: 'auto' }} onHide={() => setVisible(false)}>
                    <div className="card flex justify-content-center">
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                            placeholder="Starting Node" className="w-full md:w-14rem DropDown" />
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                            placeholder="Ending Node" className="w-full md:w-14rem DropDown" />
                        <Button icon="pi pi-check" />
                    </div>
                </Dialog>
            </div>
        </div>
    )
}

export default EdgeDialogBox