export default function CheckingEmpty(props) {
  if (props.data.length === 0 && props.loading === false) {
    return (
      <div
        className="px-4 py-3 leading-normal mt-5 text-yellow-700 bg-yellow-100 rounded-lg w-full mx-auto"
        role="alert"
      >
        <span>
          သင်ရှာနေသောအရာကို မတွေ့ပါ။ ဒီစာရင်းမှာ ပါဝင်သင့်တယ်လို့ ထင်ပါက{" "}
          <a href="mailto:contact@010221.org">contact@010221.org</a> သို့
          အချက်အလက်များ ပေးပို့နိုင်ပါတယ်။
        </span>
      </div>
    );
  } else {
    return null;
  }
}
