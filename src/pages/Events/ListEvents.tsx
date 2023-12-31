import React, { useEffect, useState } from 'react';
import EventsService from '../../services/EventsService';
import { FormValues } from '../../@types/forms';
import * as S from './styles';
import { formattedDateToBr } from '../../utils/formatDate';

export const Events = () => {
    const [events, setEvents] = useState<FormValues[]>([]); 
    const eventsService = new EventsService();
    
    useEffect(() => {
        const fetchData = async () => {
            const events = await eventsService.listEvents();
            setEvents(events);
        };
        fetchData();
    }, [])

    return (
        <>
        <S.Container>
            <h2>Confira os principais eventos que estão acontecendo!</h2>
            </S.Container>
            <S.Cards>
                {
                    events.map((event: FormValues) => {
                        return (
                            <S.Card key={event.address}>
                                <h2>{event.eventName}</h2>
                                <div className='event-infos'>
                                    <span>{event.city}</span>
                                    <span>{event.state}</span>
                                    <span>{event.address}</span>
                                    <span>{event.description}</span>
                                </div>
                                <div className='event-dates'>                    
                                            <span>{formattedDateToBr(event.startDate)}</span>
                                            <span>{formattedDateToBr(event.endDate)}</span>
                                </div>
                            </S.Card>
                        )
                    })
                }
            </S.Cards>
        </>
    )
}