import React from 'react'

export default function FeatureComponent({title,image}) {
  return (
    <div>
        <h2>{title}</h2>
        <div>{image}</div>
    </div>
  )
}
