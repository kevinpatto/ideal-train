function DonationCard () {
return (
    <form>
    <h2 class="donation-title">Card Number</h2>,
    <input type="number"></input>,
    <h2 class="donation-title">CVC</h2>,
    <input type="number"></input>,
    <h2 class="donation-title">Expiration Date</h2>,
    <input type="number"></input>,
    <h2 class="donation-title">How much would you like to donate?</h2>,
    <input type="number"></input>,
    <button type="button" class="btn btn-success">Submit</button>
    </form>
)
};

export default DonationCard