export const formatDate = (input) => {
    // June, 22, 2023
    const date = new Date(input);
    return date.toLocaleDateString('en-US', {month: 'long', day:'numeric', year:'numeric'});
}