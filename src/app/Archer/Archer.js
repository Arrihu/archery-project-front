import React, { useState, useEffect } from 'react'
import { ArcherAPI } from '../../api/ArcherAPI'

// import ArcherForm from './ArcherForm'
import ArcherList from './ArcherList'


const Archer = () => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [clubId, setClubId] = useState('')
    const [tournamentId, setTournamentId] = useState('')
    const [archers, setArchers] = useState([])
    const [mode, setMode] = useState('add')
    const [showArcherForm, setShowArcherForm] = useState(false)

    useEffect(() => {
        listAllArchers()
    })

    const listAllArchers = () => {
        const getArchers = async () => {
            const archers = await ArcherAPI.getArchers()
            setArchers(archers)
        }
        getArchers()
    }
    
    return (
        <div>
            {!showArcherForm &&
                <ArcherList 
                    archers={archers}
                />
            }
        </div>
    )
}

export default Archer