import React from 'react'
import styles from '../styles/SetStatusModal.module.css'
const SetStatusModal = () => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalcontainer}>
                <div className={styles.statustop}>
                    <p>Set a status</p>
                    <p>x</p>
                </div>
                <div className={styles.modalcontent}>
                    <form action="" method="post">
                        <div className={styles.addstatus}>
                            <div className={styles.addstatusleft}>
                                <p>5</p>
                                <input type="text"  className={styles.input} placeholder = "What is your status?"/>
                            </div>
                            <p>x</p>
                        </div>
                        <label htmlFor="">Clear after:</label>
                        <select name="" id="">
                            <option value="">Don't clear</option>
                            <option value="">1 hour</option>
                            <option value="">2 hours</option>
                            <option value="">4 hours</option>
                            <option value="">Today</option>
                            <option value="">This week</option>
                            <option value="">Set a date and time</option>
                        </select>
                    </form>
                    <p className={styles.clearafter}>clear after</p>
                    <button className={styles.statuscta}>Save changes</button>
                </div>
            </div>
        </div>
    )
}

export default SetStatusModal
