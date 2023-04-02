<?php 
//get all claim 
function getAllclaim($db) {

    
    $sql = 'Select * FROM claim '; 
    $stmt = $db->prepare ($sql); 
    $stmt ->execute(); 
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 
} 

//get claim by id 
function getclaim($db, $claimId) {

    $sql = 'Select o.staff_name, o.date, o.amount, o.reason FROM claim o ';
    $sql .= 'Where o.id = :id';
    $stmt = $db->prepare ($sql);
    $id = (int) $claimId;
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 

}

//add new claim
function createclaim($db, $form_data) { 
    //stop at sisni
    $sql = 'Insert into claim ( staff_name, date, amount, reason)'; 
    $sql .= 'values (:staff_name, :date, :amount, :reason)';  
    $stmt = $db->prepare ($sql); 
    $stmt->bindParam(':staff_name', $form_data['staff_name']);  
    $stmt->bindParam(':date', ($form_data['date']));
    $stmt->bindParam(':amount', ($form_data['amount']));
    $stmt->bindParam(':reason', ($form_data['reason']));
    $stmt->execute(); 
    return $db->lastInsertID();
}


//delete claim by id 
function deleteclaim($db,$claimId) { 

    $sql = ' Delete from claim where id = :id';
    $stmt = $db->prepare($sql);  
    $id = (int)$claimId; 
    $stmt->bindParam(':id', $id, PDO::PARAM_INT); 
    $stmt->execute(); 
} 

//update claim by id 
function updateclaim($db,$form_dat,$claimId) { 

    
    $sql = 'UPDATE claim SET staff_name = :staff_name, date = :date , amount = :amount , reason = :reason '; 
    $sql .=' WHERE id = :id'; 
    $stmt = $db->prepare ($sql); 
    $id = (int)$claimId;  
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->bindParam(':staff_name', $form_dat['staff_name']);    
    $stmt->bindParam(':date', ($form_dat['date']));
    $stmt->bindParam(':amount', ($form_dat['amount']));
    $stmt->bindParam(':reason', ($form_dat['reason']));
    $stmt->execute(); 
}