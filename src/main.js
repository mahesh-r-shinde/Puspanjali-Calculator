let cashCount = 0;
let TotalTicketsSold =0;
let upiCount = 0;
let cardCount = 0;
let TotalCashAmt = 0;
let TotalUPIAmt = 0;
let TotalCardAmt=0;
let TotalNumberOfTickets =0;
let TotalCostOfSoldTickets = 0;
let startNo = 0;
let endNo = 0;
let costperticket = 0;


function getLocalStorageValues(){

  if (typeof(Storage) !== "undefined") {  
  const localStoreStartNo = Number(localStorage.getItem('startno'));
  startNo = localStoreStartNo;
  const localStoreEndNo = Number(localStorage.getItem('endno'));
  endNo = localStoreEndNo;
  const localStoreCostPerTicket = Number(localStorage.getItem('costperticket'));
  costperticket = localStoreCostPerTicket;
  const localStoreTotalCash = Number(localStorage.getItem('totalcash'));
  TotalCashAmt = localStoreTotalCash;
  const localStoreTotalUPI = Number(localStorage.getItem('totalupi'));
  TotalUPIAmt = localStoreTotalUPI;
  const localStoreTotalCard = Number(localStorage.getItem('totalcard'));
  TotalCardAmt = localStoreTotalCard;
  const localStoreCashCount = Number(localStorage.getItem('cashcount'));
  cashCount = localStoreCashCount;
  const localStoreUPICount = Number(localStorage.getItem('upicount'));
  upiCount = localStoreUPICount;
  const localStoreCardCount = Number(localStorage.getItem('cardcount'));
  cardCount = localStoreCardCount;
  const localStoreTotalCostOfSoldTickets = Number(localStorage.getItem('totalcostofsoldtickets'));
  TotalCostOfSoldTickets = localStoreTotalCostOfSoldTickets;
  const localStoreTotalTicketsSold = Number(localStorage.getItem('totalticketssold'));
  TotalTicketsSold = localStoreTotalTicketsSold;
  const localStoreTotalNoOfTickets = Number(localStorage.getItem('totalnooftickets'));
  TotalNumberOfTickets = localStoreTotalNoOfTickets;

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
    localStorage.setItem('totalticketssold',TotalTicketsSold);
    localStorage.setItem('totalnooftickets',TotalNumberOfTickets);
  }
}



function initializeAllDisplayValues1() {

 
  cashCount = 0;
  TotalTicketsSold =0;
  upiCount = 0;
  cardCount = 0;
  TotalCashAmt = 0;
  TotalUPIAmt = 0;
  TotalCardAmt=0;
  TotalCostOfSoldTickets = 0;
  startNo = 0;
  endNo = 0;


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
  let clearLocalStorage =()=>{
    localStorage.clear();
    initializeAllDisplayValues1();
  }
  function initializeAllDisplayValues() {


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
 startNo=$('#startNumber').val();
 endNo =$('#endNumber').val();

  if ((startNo<0) || (startNo > endNo)) {
    startNo = 0;
  }

  if (startNo != $('#startNumber').val()) {
    initializeAllDisplayValues();
  }
  if (startNo !=0){
  document.getElementById('startNumber').value = startNo;
  }

  
 // document.getElementById('endNumber').value = startNo;
});

$('#endNumber').on('input', function(){
    startNo=$('#startNumber').val();
    endNo=$('#endNumber').val();
   if (startNo=="" || startNo==0){
    $('#startNumber').focus();
    endNo = 0;
   }
   if (endNo < 0) {
    endNo = 0;
  }

  if ((endNo != $('#endNumber').val())||($('#endNumber').val() < startNo)) {
    endNo = 0;
    initializeAllDisplayValues();
  }

  if (endNo !=0){
  document.getElementById('endNumber').value = endNo;
  }
  //lastEndNo = endNo;
 });




 $("#endNumber").focusout(function(){
  
     endNo = document.getElementById('endNumber').value;
     startNo = document.getElementById('startNumber').value;
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
      // console.log (TotalTicketsSold);
      // console.log (TotalNumberOfTickets);
     
      // console.log (Number.isInteger(TotalTicketsSold));
      // console.log (Number.isInteger(TotalNumberOfTickets));
      if (TotalTicketsSold<TotalNumberOfTickets){
        // console.log (TotalTicketsSold);
      // console.log (cashCount);
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