class FavoritesService {
  constructor({ favoritesValidator, favoritesRepository, usersRepository }) {
    this._favoritesValidator = favoritesValidator;
    this._favoritesRepository = favoritesRepository;
    this._usersRepository = usersRepository;
  }

  async create(attributes, authenticatedUserId) {
    try {
      if (~~attributes.user_id !== authenticatedUserId)
        throw new Error('NO_PERMISSION');
      attributes = await this._favoritesValidator.validate(
        attributes,
        'forCreate'
      );
      const newfavorites = await this._favoritesRepository.create({ attributes });
      return newfavorites;
    } catch (error) {
      throw error;
    }
  }
  async getById(id, authenticatedUserId) {
    try {
      const user = await this._usersRepository.getById(id)
      if(this.user.id!==authenticatedUserId){
        throw error
      }
      const favorites = await this._favoritesRepository.getById(id);
      return favorites;
    } catch (error) {
      throw error;
    }
  }
  async getAll(authenticatedUserId) {
    try {
      var authenticatedUserId = authenticatedUserId;
      const favorites = this._favoritesRepository.getAll();
      return favorites;
    } catch (error) {
      throw error;
    }
  }


  async findAllInvolvedfavorites(userId) {
    try {
      const allfavorites = await this._favoritesRepository.findAllInvolvedfavorites(
        userId
      );
      return allfavorites;
    } catch (error) {
      throw error;
    }
  }

  async postByUserId(attributes, authenticatedUserId) {
    attributes.creator = authenticatedUserId;
    if (authenticatedUserId !== attributes.creator)
      throw new Error('NO_PERMISSION');
    attributes = Object.assign({}, attributes);
    
    try {
      const newfavorites = await this._favoritesRepository.create({ attributes });
      return newfavorites;
    } catch (error) {
      throw error;
    }
  }

  async update(id, attributes, authenticatedUserId) {

    var attributesToUse = Object.assign({}, attributes);
    try {
      var authenticatedUserId = authenticatedUserId;
      var favorites = await this._favoritesRepository.updateById(
        id,
        attributesToUse
      );
      return favorites;
    } catch (error) {
      throw error;
    }
  }
  async delete(id, authenticatedUserId) {
    try {
      var authenticatedUserId = authenticatedUserId;
      var favorites = await this._favoritesRepository.deleteById(id);
      return favorites;
    } catch (error) {
      throw error;
    }
  }
}