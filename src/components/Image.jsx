import React from 'react';

export default function Image({
  ratio,
  disabledEffect = false,
  effect = 'blur',
  sx,
  ...other
}) {
  const placeholderSrc = '/assets/images/img_placeholder.svg';

  if (ratio) {
    return (
      <div
        style={{
          width: '100%',
          lineHeight: 0,
          display: 'block',
          overflow: 'hidden',
          position: 'relative',
          paddingTop: getRatio(ratio),
          ...sx,
        }}
      >
        <div
          className='wrapper'
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            lineHeight: 0,
            position: 'absolute',
            backgroundSize: 'cover',
          }}
        >
          <img
            className='wrapper'
            src={placeholderSrc}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            {...other}
            alt=''
          />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        lineHeight: 0,
        display: 'block',
        overflow: 'hidden',
        ...sx,
      }}
    >
      <div
        className='wrapper'
        style={{
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
        }}
      >
        <img
          className='wrapper'
          src={placeholderSrc}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          {...other}
          alt=''
        />
      </div>
    </div>
  );
}

function getRatio(ratio = '1/1') {
  return {
    '4/3': 'calc(100% / 4 * 3)',
    '3/4': 'calc(100% / 3 * 4)',
    '6/4': 'calc(100% / 6 * 4)',
    '4/6': 'calc(100% / 4 * 6)',
    '16/9': 'calc(100% / 16 * 9)',
    '9/16': 'calc(100% / 9 * 16)',
    '21/9': 'calc(100% / 21 * 9)',
    '9/21': 'calc(100% / 9 * 21)',
    '1/1': '100%',
  }[ratio];
}
