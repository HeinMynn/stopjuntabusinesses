import React, { useState } from 'react';

function Disclaimer(props) {
    const [isOpen, setOpen] = useState(true);

    return (
      <>
        {isOpen ? (
          <div className="bg-yellow-400 pl-6 py-2 rounded-md mb-4">
            <span
              className="float-right cursor-pointer text-white top-0 bg-black inline-block w-6 h-6 text-center mx-2"
              onClick={() => setOpen(false)}
            >
              X
            </span>
            <small>
              အချက်အလက်များကို {props.source ? props.source + " နှင့်" : ""}{" "}
              ပြင်ပနေရာအများစုမှ ရယူထားခြင်း ဖြစ်သဖြင့် မှားယွင်းမှုများ
              ရှိပါက&nbsp;
              <a
                href="mailto:contact@010221.org"
                className="cursor-pointer text-red-800"
              >
                contact@010221.org
              </a>
              &nbsp;သို့ ဆက်သွယ်အကြောင်းကြားနိုင်ပါသည်။
            </small>
          </div>
        ) : null}
      </>
    );
}

export default Disclaimer;