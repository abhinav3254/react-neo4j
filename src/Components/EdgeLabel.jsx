import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function EdgeLabel({ visible, setVisible }) {
    const [edgeLabel, setEdgeLabel] = useState('');
    return (
        <div>
            <Dialog header="Label" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <div className="card flex justify-content-center">
                    <InputText value={edgeLabel} onChange={(e) => setEdgeLabel(e.target.value)} style={{ margin: '0 5px 0 0' }} placeholder='edge label' />
                    <Button icon="pi pi-check" />
                </div>
            </Dialog>
        </div>
    )
}

export default EdgeLabel;