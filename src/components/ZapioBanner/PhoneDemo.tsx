/**
 * Hand-held phone running a looping Zapio demo:
 *   1. a finger touches the product page and drags it up,
 *   2. lifts and taps "+ Claim" on the exclusive-offer gift,
 *   3. the button turns into "Claimed", the cart badge bumps and a
 *      success toast drops in, then the loop resets.
 *
 * The whole timeline is CSS keyframes (see ZapioBanner.css) driven by
 * a single --zapio-loop duration so every layer stays in sync.
 */
export function PhoneDemo() {
  return (
    <div className="ZapioPhone">
      <div className="ZapioPhone__rig">
        <HandBack />

        <div className="ZapioPhone__device">
          <div className="ZapioPhone__screen">
            <div className="ZapioPhone__statusbar">
              <span>9:41</span>
              <span className="ZapioPhone__island" />
              <span className="ZapioPhone__signal">
                <i />
                <i />
                <i />
              </span>
            </div>

            <div className="ZapioPhone__scroller">
              <div className="ZapioPhone__nav">
                <span className="ZapioPhone__logo">zapio</span>
                <span className="ZapioPhone__cart">
                  <CartGlyph />
                  <span className="ZapioPhone__badge">
                    <span className="ZapioPhone__badge0">0</span>
                    <span className="ZapioPhone__badge1">1</span>
                  </span>
                </span>
              </div>
              <div className="ZapioPhone__crumbs">Home / Trending / Zap air</div>

              <div className="ZapioPhone__hero">
                <Sneaker />
              </div>

              <div className="ZapioPhone__product">
                <strong>Zap Air Sneakers</strong>
                <span>$120.00</span>
              </div>
              <div className="ZapioPhone__sizes">
                <i>39</i>
                <i className="is-on">40</i>
                <i>41</i>
                <i>42</i>
              </div>

              <div className="ZapioPhone__offer">
                <strong>Exclusive Offer</strong>
                <span>You’ve unlocked a special gift!</span>
                <div className="ZapioPhone__offerCard">
                  <b>Make a purchase (1/1 week)</b>
                  <small>Get a mystery gift added to your cart</small>

                  <div className="ZapioPhone__item">
                    <span className="ZapioPhone__thumb">
                      <Sneaker small />
                    </span>
                    <span className="ZapioPhone__itemText">
                      1x Zap sneakers
                      <small>Size: 40</small>
                      <small className="ZapioPhone__free">
                        Free <s>$69.99</s>
                      </small>
                    </span>
                    <span className="ZapioPhone__claim ZapioPhone__claim--live">
                      <span className="ZapioPhone__claimIdle">+ Claim</span>
                      <span className="ZapioPhone__claimDone">✓ Claimed</span>
                    </span>
                  </div>

                  <div className="ZapioPhone__item">
                    <span className="ZapioPhone__thumb ZapioPhone__thumb--bag" />
                    <span className="ZapioPhone__itemText">
                      1x Zap strap bag
                      <small>Colors: Black</small>
                      <small className="ZapioPhone__free">
                        Free <s>$15.99</s>
                      </small>
                    </span>
                    <span className="ZapioPhone__claim">
                      <span className="ZapioPhone__claimIdle">+ Claim</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="ZapioPhone__more">
                <strong>You may also like</strong>
                <div>
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>

            <div className="ZapioPhone__toast" role="presentation">
              <span className="ZapioPhone__toastIcon">✓</span>
              Gift claimed successfully!
            </div>
          </div>
        </div>

        <HandFront />

        <div className="ZapioPhone__finger">
          <span className="ZapioPhone__ripple" />
          <TapFinger />
        </div>
      </div>
    </div>
  );
}

function CartGlyph() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2.5 3.5h2l1.8 9h9.2l1.8-6.5H6" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="8" cy="16.5" r="1.2" fill="currentColor" />
      <circle cx="14.5" cy="16.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function Sneaker({ small = false }: { small?: boolean }) {
  return (
    <svg
      className={small ? "ZapioSneaker ZapioSneaker--small" : "ZapioSneaker"}
      viewBox="0 0 120 60"
      width={small ? 22 : 118}
      height={small ? 11 : 59}
    >
      <path
        d="M8 40c0-10 6-22 14-24l10 6 16-4c8 10 22 14 36 15 14 1 26 5 28 12v5H8z"
        fill="#f4f5f6"
        stroke="#c9ccd1"
        strokeWidth="1.5"
      />
      <path d="M8 46h104v6c0 3-2 4-5 4H13c-3 0-5-1-5-4z" fill="#e2e4e8" />
      <path d="M44 24l6 10M52 22l6 10M60 22l6 10" stroke="#b5b9bf" strokeWidth="2" strokeLinecap="round" />
      <path d="M70 34c8 2 16 2 22 0" stroke="#1c1d1f" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/** Palm and wrist, rendered behind the phone. */
function HandBack() {
  return (
    <svg className="ZapioHand ZapioHand--back" viewBox="-160 0 460 760" width="460" height="760">
      <defs>
        <linearGradient id="zapioSkinBack" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e9b896" />
          <stop offset="0.6" stopColor="#cf9472" />
          <stop offset="1" stopColor="#9c6248" />
        </linearGradient>
      </defs>
      <path
        d="M30 300c40-30 120-40 175-10 20 40 25 110 10 160-20 70-60 110-80 160l-30 110H-140l60-150c40-90 70-180 110-270z"
        fill="url(#zapioSkinBack)"
      />
    </svg>
  );
}

/** Fingers wrapped round the right edge and the thumb on the left edge. */
function HandFront() {
  return (
    <svg className="ZapioHand ZapioHand--front" viewBox="-160 0 460 760" width="460" height="760">
      <defs>
        <linearGradient id="zapioSkinFront" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c8896a" />
          <stop offset="0.45" stopColor="#efc2a2" />
          <stop offset="1" stopColor="#b8795b" />
        </linearGradient>
        <linearGradient id="zapioThumb" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#b97a5b" />
          <stop offset="0.6" stopColor="#ebbb99" />
          <stop offset="1" stopColor="#f3caab" />
        </linearGradient>
        <filter id="zapioSoft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="-2" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#zapioSoft)">
        <rect x="186" y="214" width="40" height="30" rx="15" fill="url(#zapioSkinFront)" />
        <rect x="188" y="252" width="42" height="32" rx="16" fill="url(#zapioSkinFront)" />
        <rect x="186" y="292" width="40" height="30" rx="15" fill="url(#zapioSkinFront)" />
        <rect x="180" y="330" width="36" height="28" rx="14" fill="url(#zapioSkinFront)" />
        <path
          d="M-40 560c10-70 25-140 40-185 8-22 34-24 36-2 2 30-2 90-14 150-8 40-20 70-30 90z"
          fill="url(#zapioThumb)"
        />
      </g>
    </svg>
  );
}

/** Index finger (plus a hint of the hand behind it) used for the gestures. */
function TapFinger() {
  return (
    <svg className="ZapioTapFinger" viewBox="0 0 120 520" width="120" height="520">
      <defs>
        <linearGradient id="zapioFinger" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c48466" />
          <stop offset="0.45" stopColor="#f1c6a6" />
          <stop offset="1" stopColor="#b6765a" />
        </linearGradient>
        <filter id="zapioFingerShadow" x="-40%" y="-10%" width="180%" height="120%">
          <feDropShadow dx="6" dy="10" stdDeviation="6" floodColor="#000" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#zapioFingerShadow)">
        <path
          d="M20 20c0-14 10-20 20-20s20 6 20 20v200c20-6 46 4 54 30l6 270H0l12-260c2-14 6-24 8-30z"
          fill="url(#zapioFinger)"
        />
        <path d="M28 14c0-8 6-10 12-10s12 2 12 10v18c0 4-4 6-12 6s-12-2-12-6z" fill="#f7dccb" opacity="0.9" />
        <path d="M24 92c10 4 22 4 32 0M24 160c10 4 22 4 32 0" stroke="#a96a4e" strokeWidth="2" opacity="0.5" fill="none" />
      </g>
    </svg>
  );
}
