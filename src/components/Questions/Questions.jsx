import React from 'react';
import './Questions.scss'
import QuestionsItem from '../QuestionsItem/QuestionsItem'
import useFetch from '../../hooks/useFetch';
export default function Questions() {
    const { car: question, loading, error } = useFetch(`/questions`);
    return (
    <div className='questions__wrap'>
        <div className="container">
            <div className="questions">
                <h3 className="questions__title">Найчастіші запитання</h3>
                {error ? (
                    "Something went wrong!"
                ) : loading ? (
                    "Loading"
                ) : (
                <div className="questions__items">
                    {question && question.map((question) => (
                        <QuestionsItem key={question?.attributes?.id} id={question.id} title={question.attributes?.title} content={question.attributes?.content} />
                    ))}
                </div>
                )}
            </div>
        </div>
    </div>
  )
}
