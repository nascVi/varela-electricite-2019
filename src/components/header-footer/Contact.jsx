import React from 'react'
import Button from '../ui/Button';

const Contact = () => {
    return (
        <div className="contact">
            <input type='text' name="" id="" placeholder="Your email" />
            <select name="" id="">
                <option value="">Indiquer votre Commune</option>
            </select>
            <div className="contact__purpose">

                <label type="text" name="" id="purposes__title">
                    Je souhaite être rappelé:
                    </label>
                <input type="checkbox" name="" id="rdv" />
                <label htmlFor="rdv téléphonique" className="">
                    Pour un pemier contacte
                    </label>
                <input type="checkbox" name="" id="devis" />
                <label htmlFor="devis" className="">
                    Une Urgence ou un dégas
                    </label>
                <input type="checkbox" name="" id="entrepreneur" />
                <label htmlFor="relation pro" className="">
                    Dans le cadre d'une relation professionnelle
                </label>
            </div>
            <Button type="submit" text="Valider" context="footer" />
        </div>
    )
}

export default Contact
