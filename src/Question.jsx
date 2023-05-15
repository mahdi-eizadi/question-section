import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Question = ({ id, title, info, activeId, toggleQuestion }) => {
    const isActive = id === activeId;
    return (
        <article className='question'>
            <header>
                <h5>{title}</h5>
                <button
                    className='question-btn'
                    type='button'
                    onClick={() => { toggleQuestion(id) }}>
                    {isActive ?
                        <AiOutlineMinus />
                        :
                        <AiOutlinePlus />
                    }
                </button>
            </header>
            <div>
                {isActive && <p>{info}</p>}
            </div>

        </article>
    )
}

export default Question
