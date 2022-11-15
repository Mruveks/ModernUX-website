import React from 'react'
import { card } from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () =>(
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Find a better card deal<br className="sm:block hidden" /> easy steps.</h2>
            <p className={`${styles.paragraph} max-2-[470px] mt-5`}>
                Mauris eu adispiscing ultrices ametodio anaen enqe. Elit enim sed messa etiam. Forio ipsum ric rhonocus.
                Mauris eu adispiscing ultrices ametodio anaen enqe. Elit enim sed messa etiam. Forio ipsum ric rhonocus platea
            </p>
            <Button styles="mt-10"/>
        </div>

        <div className={layout.sectionImg}>
            <img src={card} alt="card" className="w-[100%] h-[100%]" />
        </div>
    </section>
)


export default CardDeal
