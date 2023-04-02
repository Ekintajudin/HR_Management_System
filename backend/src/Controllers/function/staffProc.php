<?php 
//get all staff 
function getAllstaff($db) {

    
    $sql = 'Select * FROM staff '; 
    $stmt = $db->prepare ($sql); 
    $stmt ->execute(); 
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 
} 

//get staff by id 
function getstaff($db, $staffId) {

    $sql = 'Select o.staff_name, o.staff_email, o.staff_salary, o.staff_phone, o.staff_address FROM staff o  ';
    $sql .= 'Where o.id = :id';
    $stmt = $db->prepare ($sql);
    $id = (int) $staffId;
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 

}

//add new staff 
function createstaff($db, $form_data) { 
    //stop at sisni
    $sql = 'Insert into staff ( staff_name, staff_email, staff_salary, staff_phone, staff_address)'; 
    $sql .= 'values (:staff_name, :staff_email, :staff_salary, :staff_phone, :staff_address)';  
    $stmt = $db->prepare ($sql); 
    $stmt->bindParam(':staff_name', $form_data['staff_name']);  
    $stmt->bindParam(':staff_email', ($form_data['staff_email']));
    $stmt->bindParam(':staff_salary', ($form_data['staff_salary']));
    $stmt->bindParam(':staff_phone', ($form_data['staff_phone']));
    $stmt->bindParam(':staff_address', ($form_data['staff_address']));
    $stmt->execute(); 
    return $db->lastInsertID();
}


//delete staff by id 
function deletestaff($db,$staffId) { 

    $sql = ' Delete from staff where id = :id';
    $stmt = $db->prepare($sql);  
    $id = (int)$staffId; 
    $stmt->bindParam(':id', $id, PDO::PARAM_INT); 
    $stmt->execute(); 
} 

//update staff by id 
function updatestaff($db,$form_dat,$staffId) { 

    
    $sql = 'UPDATE staff SET staff_name = :staff_name, staff_email = :staff_email , staff_salary = :staff_salary , staff_phone = :staff_phone , staff_address = :staff_address'; 
    $sql .=' WHERE id = :id'; 
    $stmt = $db->prepare ($sql); 
    $id = (int)$staffId;  
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->bindParam(':staff_name', $form_dat['staff_name']);    
    $stmt->bindParam(':staff_email', ($form_dat['staff_email']));
    $stmt->bindParam(':staff_salary', ($form_dat['staff_salary']));
    $stmt->bindParam(':staff_phone', ($form_dat['staff_phone']));
    $stmt->bindParam(':staff_address', ($form_dat['staff_address']));
    $stmt->execute(); 
}