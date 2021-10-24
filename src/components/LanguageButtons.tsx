import React from 'react'
import Language, { flagForLanguage } from 'models/Language'
import AppStore from 'stores/AppStore'
import { classnames } from 'classnames/tailwind'

const container = classnames(
  'flex',
  'flex-row',
  'items-center',
  'justify-center',
  'flex-wrap'
)
const languageButton = classnames(
  'py-2',
  'px-4',
  'focus:outline-none',
  'mx-1',
  'text-4xl',
  'rounded-full',
  'hover:bg-yellow-400',
  'text-white'
)

export default function LanguageButtons() {
  return (
    <div className="glassWrapper">
      <div className={container}>
        {Object.values(Language).map((k) => (
          <button
            className={languageButton}
            key={k}
            onClick={() => {
              AppStore.language = k
            }}
          >
            {flagForLanguage(k)}
          </button>
        ))}
      </div>
    </div>
  )
}
