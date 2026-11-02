/**
 * Faded Zapio widget previews that sit behind the phone on the right side
 * of the banner (upsell progress bar, bundle picker, add-on lists).
 * Purely decorative.
 */
export function BackdropCards() {
  return (
    <div className="ZapioBackdrop">
      {/* Order-discount progress */}
      <div className="ZapioBackdrop__card ZapioBackdrop__card--progress">
        <p className="ZapioBackdrop__title">
          You are $100 away from getting an order discount
        </p>
        <div className="ZapioBackdrop__track">
          <span className="ZapioBackdrop__node ZapioBackdrop__node--active" />
          <span className="ZapioBackdrop__node" />
          <span className="ZapioBackdrop__node" />
        </div>
        <div className="ZapioBackdrop__labels">
          <span>Free shipping</span>
          <span>15% off</span>
          <span>Gift</span>
        </div>
      </div>

      {/* Bundle picker */}
      <div className="ZapioBackdrop__card ZapioBackdrop__card--pack">
        <strong>1 Pack</strong>
        <span>Standard price</span>
      </div>
      <div className="ZapioBackdrop__card ZapioBackdrop__card--pack2">
        <span className="ZapioBackdrop__radio" />
        <strong>
          2 Pack <em>Save 10%</em>
        </strong>
        <span>You get 10% off</span>
        <b>$90.00</b>
      </div>

      {/* Bundle summary */}
      <div className="ZapioBackdrop__card ZapioBackdrop__card--bundle">
        <div className="ZapioBackdrop__row">
          <span className="ZapioBackdrop__thumb" />
          <span>
            Zap tan…
            <small>Color ⌄</small>
          </span>
          <span className="ZapioBackdrop__price">
            <small>
              -10% <s>$25.00</s>
            </small>
            <b>$22.50</b>
          </span>
        </div>
        <div className="ZapioBackdrop__row">
          <span>$4.50</span>
          <span className="ZapioBackdrop__price">
            <small>
              <s>$125.98</s>
            </small>
            <b className="ZapioBackdrop__big">$121.48</b>
          </span>
        </div>
        <span className="ZapioBackdrop__cta">Add bundle to cart</span>
      </div>

      {/* Add-ons */}
      <div className="ZapioBackdrop__card ZapioBackdrop__card--addon">
        <span className="ZapioBackdrop__thumb" />
        <span>
          1x Zap sneakers
          <small>Size ⌄</small>
          <small>
            $89.99 <s>$99.99</s>
          </small>
        </span>
        <span className="ZapioBackdrop__add">+ Add</span>
      </div>
      <div className="ZapioBackdrop__card ZapioBackdrop__card--addon2">
        <span className="ZapioBackdrop__thumb" />
        <span>
          1x Zap strap bag
          <small>Colors ⌄</small>
          <small>
            $10.99 <s>$15.99</s>
          </small>
        </span>
        <span className="ZapioBackdrop__add">+ Add</span>
      </div>
    </div>
  );
}
