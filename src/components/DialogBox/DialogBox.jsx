import { Dialog } from 'primereact/dialog';
import { useTaskStore } from '../../stores/Tasks.store';
import { useState } from 'react';
import './DialogBox.style.css';
import Button from '../Button/Button';

const DialogBox = () => {

    const { dialog, editTask, setDialog } = useTaskStore();
    const { isOpen, item } = dialog;
    const [editedTitle, setEditedTitle] = useState(item.title || '');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (item) {
            editTask(item.id, { title: editedTitle });
            setEditedTitle('');
            setDialog(false, null);
        }
    }

    return (
        <Dialog
            appendTo='self'
            header='Uredi task'
            visible={isOpen && item}
            style={{
                width: '50vw',
                backgroundColor: '#9DDE8B',
                color: '#385170',
                fontWeight: 'bold',
                fontSize: '20px',
                padding: '1rem',
                borderRadius: '10px',
            }}
            onHide={() => setDialog(false, null)}>
            <div>
                <form className='dialogForm' onSubmit={handleSubmit}>
                    <lable htmlFor='task'>
                        <input
                            className='dialogInput'
                            type='text'
                            name='task'
                            id='task'
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                        />
                    </lable>
                    <Button buttonText='Sačuvaj' />
                </form>
            </div>
        </Dialog>
    )
}

export default DialogBox;