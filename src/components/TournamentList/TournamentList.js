import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import { TournamentAPI } from '../../api/TournamentAPI'

import './list_tournament.scss'


const ListTournament = () => {
    const [tournaments, setTournaments] = useState([])

    useEffect(() => {
        getTournaments()
    })
   
    const getTournaments = async () => {
        const tournaments = await TournamentAPI.getTournaments()
        setTournaments(tournaments)
    }
    
    return (
        <div className='tournament-table'>
            <div>
                <input type='text' className='form-control' placeholder='Search tournament' />
            </div>
            <br />
            <Table hover bordered>
                <tbody>
                    {
                        typeof(tournaments) === 'object' &&
                        tournaments.map((tournament) => {
                            return (
                                <tr>
                                    <td>{tournament.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ListTournament