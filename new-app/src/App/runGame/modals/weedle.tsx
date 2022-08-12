import React from 'react';
import ClassNames from 'classnames';

const Weedle = ({showWeedle, fadeWeedle}: {showWeedle: boolean, fadeWeedle: boolean}) => {

  const fadeAnimationClassName = () => {
    if (fadeWeedle) {
      return "transition ease-in-out duration-700 text-hacky-green"
    } else {
      return "transition ease-in-out duration-500 text-charcoal"
    }
  }

  return (
    <div className="transition ease-in-out duration-700">
      {showWeedle ? (
        <h1 className={ClassNames(fadeAnimationClassName())}>Weedle</h1>
      ) :
        <h1 className={ClassNames(fadeAnimationClassName())}>Nordle</h1>
      }
    </div>
  )
}

export default Weedle

