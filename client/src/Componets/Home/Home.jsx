import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect} from 'react';
import {getAllGames} from '../../Redux/Action/index'
import NavBar from './NavBar/NavBar';
import Card from './Card';
export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllGames());
    }, [dispatch]);
    const gamesData = useSelector(state=> state.games);
    console.log(gamesData)
    return (
        <div>
            <NavBar/>
            {
                gamesData?.map(data=> <Card key={data.id} data={data}/>)
            }
        </div>
    )


}