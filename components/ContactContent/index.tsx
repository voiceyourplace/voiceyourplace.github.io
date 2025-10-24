import { useLocale } from 'utils/hooks'
import styles from './index.module.scss'


import { useState, useEffect, useRef } from 'react'
import DocumentTitle from 'atoms/DocumentTitle'

export default function ContactContent() {
  const locale = useLocale()

  const [number1, setNumber1] = useState<number>()
  const [number2, setNumber2] = useState<number>()
  const challengeRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setNumber1(Math.floor(Math.random() * 10))
    setNumber2(Math.floor(Math.random() * 10))
  }, [])

  if (number1 === undefined || number2 === undefined) {
    return null
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (challengeRef.current) {
      const answer = Number(challengeRef.current.value)
      if (answer !== number1 + number2) {
        e.preventDefault()
        alert('Răspuns greșit la problema de matematică!')
      }
    }
  }

  return (
    <>
      <DocumentTitle title='Contact' />
      <div className={styles.contactContent}>
        <div className={styles.formWrapper}>
          <form
            name='simple-contact-form'
            action='https://formspree.io/f/xrgwvbgp'
            method='post'
            onSubmit={handleSubmit}
          >
            <label htmlFor='full-name'>{locale === 'ro' ? 'Nume:' : 'Name:'}</label>
            <input type='text' id='full-name' name='name' required />

            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='_replyto' required />

            <label htmlFor='message'>{locale === 'ro' ? 'Mesaj:' : 'Message:'}</label>
            <textarea id='message' name='message' rows={10} required></textarea>
            <input
              type='hidden'
              name='_subject'
              id='email-subject'
              value='Contact Form Submission'
            />
            <label htmlFor='challenge'>
              {locale === 'ro' ? 'Pentru a trimite formularul, rezolvați următoarea problemă de matematică:' : 'To submit the form, solve the following math problem:'}
            </label>
            <div>
              {number1} + {number2} =
              <input
                type='text'
                id='challenge'
                name='challenge'
                required
                ref={challengeRef}
                autoComplete='off'
                style={{ width: 40, marginLeft: 8 }}
              />
            </div>

            <button type='submit'>{locale === 'ro' ? 'Trimite' : 'Submit'}</button>
          </form>
        </div>
      </div>
    </>
  )
}
