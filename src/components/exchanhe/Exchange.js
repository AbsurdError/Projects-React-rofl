import React, {useContext} from "react";
import { RateContext } from "../../context/RateContext";
export const Exchange = () => {
    const {state} = useContext(RateContext)
    const currency = {...state.currency}
    return(
        <div className="exchange">
            <div className="exchangeContainer">
                <div className="exchangeContent">
                    <div className="exchange__div">
                        <p className="exchange__p">Базовая валюта: &nbsp; &nbsp;Дата:</p>
                    </div>
                    <ul className="exchange__ul">
                        {
                            Object.keys(currency).map((item, i) => {
                                return(
                                    <li key={item} className="exchange__li">
                                        <span className="exchange__span"><img src={currency[item].flag} alt={item}/> {item}</span>
                                        <span className="exchange__span">{`1${state.base} = ${currency[item].course} ${item}`}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}