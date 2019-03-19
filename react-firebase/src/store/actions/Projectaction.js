const Createprojects= (project)=> {

    return (dispatch, getState, { getFirebase, getFirestore }) =>{
   // make asyn calls

   const firestore =getFirestore();
   firestore.collection('projects').add({
    ...project,
    authorFirstName: 'Brajinder',
    authorLastName: 'Deep',
    authorId: 12345986,
    createdAt: new Date()
   }).then(()=> {
     dispatch ({ type: 'CREATE_PROJECT', project});
   }).catch((err) => {
       dispatch ({ type: 'CREATE_PROJECT_ERROR', err});
   })
}
}
export default Createprojects