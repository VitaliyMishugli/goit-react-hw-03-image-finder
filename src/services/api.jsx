async function apiRequest (searchQuery, page){
  return await fetch(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=29908422-6515e5e6655e3a8d0d58918bc&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => res.json());    
}

const api = {
  apiRequest
}

export default api; 