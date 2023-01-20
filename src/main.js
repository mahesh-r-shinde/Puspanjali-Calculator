function getLocalStorageValues(){

  if (typeof(Storage) !== "undefined") {  
  const localStoreStartNo = Number(localStorage.getItem('startno'));
  const localStoreEndNo = Number(localStorage.getItem('endno'));
  const localStoreCostPerTicket = localStorage.getItem('costperticket');
  const localStoreTotalCash = localStorage.getItem('totalcash');
  const localStoreTotalUPI = localStorage.getItem('totalupi');
  const localStoreTotalCard = localStorage.getItem('totalcard');
  const localStoreCashCount = localStorage.getItem('cashcount');
  const localStoreUPICount = localStorage.getItem('upicount');
  const localStoreCardCount = localStorage.getItem('cardcount');
  const localStoreTotalCostOfSoldTickets = localStorage.getItem('totalcostofsoldtickets');
  const localStoreTotalTicketsSold = localStorage.getItem('totalticketssold');
  const localStoreTotalNoOfTickets = localStorage.getItem('totalnooftickets');

  document.getElementById('startNumber').value = localStoreStartNo;
  document.getElementById('endNumber').value = localStoreEndNo;
   $('#TotalNumberOfTickets').html(localStoreTotalNoOfTickets);
  $('#costTicket').html(localStoreCostPerTicket);
  $('#TotalTicketsSold').html(localStoreTotalTicketsSold);
  $('#TotalCostOfSoldTickets').html(localStoreTotalCostOfSoldTickets);
  $('#CashTotal').html(localStoreCashCount);
  $('#TotalCash1').html(localStoreTotalCash);
  $('#UPITotal').html(localStoreUPICount);
  $('#TotalUPI1').html(localStoreTotalUPI);
  $('#CardTotal').html(localStoreCardCount);
  $('#TotalCard1').html(localStoreTotalCard);

  }

}
$(document).ready(function(){

  let cashCount = 0;
  let TotalTicketsSold =0;
  let upiCount = 0;
  let cardCount = 0;
  let TotalCashAmt = 0;
  let TotalUPIAmt = 0;
  let TotalCardAmt=0;
  let TotalNumberOfTickets =0;
  let TotalCostOfSoldTickets = 0;
  //let lastEndNo = 0;



let saveToLocalStorage = () =>{
  if (typeof(Storage) !== "undefined") { 
    localStorage.setItem('startno',Number(document.getElementById('startNumber').value));
    localStorage.setItem('endno',Number(document.getElementById('endNumber').value));
    localStorage.setItem('costperticket',Number(document.getElementById('costTicket').value));
   
    localStorage.setItem('totalcash',TotalCashAmt);
    localStorage.setItem('totalupi',TotalUPIAmt);
    localStorage.setItem('totalcard',TotalCardAmt);
    localStorage.setItem('cashcount',cashCount);
    localStorage.setItem('upicount',upiCount);
    localStorage.setItem('cardcount',cardCount);
    localStorage.setItem('totalcostofsoldtickets',TotalCostOfSoldTickets);
    localStorage.setItem('totalticketssold',TotalNumberOfTickets);
    localStorage.setItem('totalnooftickets',TotalNumberOfTickets);



  }
}

let clearLocalStorage =()=>{
  localStorage.clear();
  initializeAllDisplayValues1();
}

function initializeAllDisplayValues1() {

  result = 0; 
  cashCount = 0;
  TotalTicketsSold =0;
  upiCount = 0;
  cardCount = 0;
  TotalCashAmt = 0;
  TotalUPIAmt = 0;
  TotalCardAmt=0;
  TotalCostOfSoldTickets = 0;
  startNo = 0;

  $('#startNumber').html(0);
  $('#endNumber').html(0);
  $('#TotalNumberOfTickets').html(0);
  $('#TotalTicketsSold').html(0);
  $('#TotalCostOfSoldTickets').html(0);
  $('#CashTotal').html(0);
  $('#TotalCash1').html(0);
  $('#UPITotal').html(0);
  $('#TotalUPI1').html(0);
  $('#CardTotal').html(0);
  $('#TotalCard1').html(0);

  }

  function initializeAllDisplayValues() {

    result = 0; 
    cashCount = 0;
    TotalTicketsSold =0;
    upiCount = 0;
    cardCount = 0;
    TotalCashAmt = 0;
    TotalUPIAmt = 0;
    TotalCardAmt=0;
    TotalCostOfSoldTickets = 0;

    $('#TotalTicketsSold').html(0);
    $('#TotalCostOfSoldTickets').html(0);
    $('#CashTotal').html(0);
    $('#TotalCash1').html(0);
    $('#UPITotal').html(0);
    $('#TotalUPI1').html(0);
    $('#CardTotal').html(0);
    $('#TotalCard1').html(0);

    }

$('#startNumber').on('input', function(){
 // alert('lost focus triggered!');
  var startNo=$('#startNumber').val();
  if (startNo<0) {
    startNo = 0;
  }

  if (startNo != $('#startNumber').val()) {
    initializeAllDisplayValues();
  }
  document.getElementById('startNumber').value = startNo;

  
 // document.getElementById('endNumber').value = startNo;
});

$('#endNumber').on('input', function(){
   var endNo=$('#endNumber').val();
   if (document.getElementById('startNumber').value =="" || $('#startNumber').val()==0){
    $('#startNumber').focus();
    endNo = 0;
   }
   if (endNo < 0) {
    endNo = 0;
  }

  if (endNo != $('#endNumber').val()) {
    initializeAllDisplayValues();
  }

  document.getElementById('endNumber').value = endNo;
  //lastEndNo = endNo;
 });




 $("#endNumber").focusout(function(){
  
    var endNo = document.getElementById('endNumber').value;
    var startNo = document.getElementById('startNumber').value;
    var result = 0;
    result = endNo - startNo + 1;
    
    if (result <0){
      //alert(result);
      result=0;
    }
     
    $('#TotalNumberOfTickets').html(result);
    
    TotalNumberOfTickets = result;

    if (result <=0 && TotalCostOfSoldTickets>0) {
      initializeAllDisplayValues();
    }
    
  
  
});

 $('#costTicket').on('input', function(){
  // alert('lost focus triggered!');
   var costTicket=$('#costTicket').val();
   if (costTicket<0) {
    costTicket = 0;
   }
   document.getElementById('costTicket').value = costTicket;
 });


 $('#btnClear').click(function(){
  if (typeof(Storage) !== "undefined") { 
  clearLocalStorage();
  }
});


$('#btnAddCash').click(function(){
   
      if (TotalTicketsSold<TotalNumberOfTickets){
        cashCount++;
        $('#CashTotal').html(cashCount);
        if (TotalTicketsSold >0) {
          TotalTicketsSold++;
        }
        else TotalTicketsSold=cashCount;

        $('#TotalTicketsSold').html(TotalTicketsSold);

        TotalCashAmt = cashCount * $('#costTicket').val();
        $('#TotalCash1').html(TotalCashAmt);

        TotalCostOfSoldTickets = TotalTicketsSold * $('#costTicket').val();
        $('#TotalCostOfSoldTickets').html(TotalCostOfSoldTickets);

        saveToLocalStorage();

      }
  });
  
  $('#btnMinusCash').click(function(){
    let oldcashCount = cashCount;
          if (cashCount>0) {
          cashCount--;
          }

          if (TotalTicketsSold >0 && oldcashCount>0) {
              TotalTicketsSold--;
              oldcashCount--;
          }
          document.getElementById('costTicket').value
          $('#CashTotal').html(cashCount);
          $('#TotalTicketsSold').html(TotalTicketsSold);

          TotalCashAmt = cashCount * $('#costTicket').val();
          $('#TotalCash1').html(TotalCashAmt);
         
          TotalCostOfSoldTickets = TotalTicketsSold * $('#costTicket').val();
         $('#TotalCostOfSoldTickets').html(TotalCostOfSoldTickets);

         saveToLocalStorage();
    });

  
$('#btnAddUPI').click(function(){
  if (TotalTicketsSold<TotalNumberOfTickets){
        upiCount++;
        if (TotalTicketsSold >0) {
        TotalTicketsSold++;
        }
        else TotalTicketsSold = upiCount;
        $('#UPITotal').html(upiCount);
        $('#TotalTicketsSold').html(TotalTicketsSold);

        TotalUPIAmt = upiCount * $('#costTicket').val();
        $('#TotalUPI1').html(TotalUPIAmt);

        TotalCostOfSoldTickets = TotalTicketsSold * $('#costTicket').val();
        $('#TotalCostOfSoldTickets').html(TotalCostOfSoldTickets);
        saveToLocalStorage();
      }
});

  $('#btnMinusUPI').click(function(){
                let oldupiCount = upiCount;
                if (upiCount>0) {
                upiCount--;
                }

                if (TotalTicketsSold >0 && oldupiCount>0) {
                TotalTicketsSold--;
                oldupiCount--;
                }
                $('#UPITotal').html(upiCount);
                $('#TotalTicketsSold').html(TotalTicketsSold);

                TotalUPIAmt = upiCount * $('#costTicket').val();
                $('#TotalUPI1').html(TotalUPIAmt);

                TotalCostOfSoldTickets = TotalTicketsSold * $('#costTicket').val();
                $('#TotalCostOfSoldTickets').html(TotalCostOfSoldTickets);
                saveToLocalStorage();
     });

  
$('#btnAddCard').click(function(){
  if (TotalTicketsSold<TotalNumberOfTickets){
        cardCount++;
        $('#CardTotal').html(cardCount);
        if (TotalTicketsSold >0) {
        TotalTicketsSold++;
        }
        else TotalTicketsSold = cardCount;
        $('#TotalTicketsSold').html(TotalTicketsSold);

        TotalCardAmt = cardCount * $('#costTicket').val();
        $('#TotalCard1').html(TotalCardAmt);
        
        TotalCostOfSoldTickets = TotalTicketsSold * $('#costTicket').val();
        $('#TotalCostOfSoldTickets').html(TotalCostOfSoldTickets);
        saveToLocalStorage();
      }
  });

  $('#btnMinusCard').click(function(){
          let oldcardCount = cardCount;
          if (cardCount>0) {
          cardCount--;
          }
          if (TotalTicketsSold >0 && oldcardCount>0) {
          TotalTicketsSold--;
          oldcardCount--;
          }
          $('#CardTotal').html(cardCount);
          $('#TotalTicketsSold').html(TotalTicketsSold);

          TotalCardAmt = cardCount * $('#costTicket').val();
        $('#TotalCard1').html(TotalCardAmt);
        TotalCostOfSoldTickets = TotalTicketsSold * $('#costTicket').val();
        $('#TotalCostOfSoldTickets').html(TotalCostOfSoldTickets);
        saveToLocalStorage();
  });

}); //document Ready function ends here