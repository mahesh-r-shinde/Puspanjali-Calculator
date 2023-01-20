
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
  });

}); //document Ready function ends here