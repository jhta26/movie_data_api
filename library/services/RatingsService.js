class RatingsService {
  constructor({ ratingsValidator, ratingsRepository, usersRepository }) {
    this._ratingsValidator = ratingsValidator;
    this._ratingsRepository = ratingsRepository;
    this._usersRepository = usersRepository;
  }

  async create(attributes, authenticatedUserId) {
    try {
      if (~~attributes.user_id !== authenticatedUserId)
        throw new Error('NO_PERMISSION');
      attributes = await this._ratingsValidator.validate(
        attributes,
        'forCreate'
      );
      const newratings = await this._ratingsRepository.create({ attributes });
      return newratings;
    } catch (error) {
      throw error;
    }
  }
  async getById(id, authenticatedUserId) {
    try {
      // const user = await this._usersRepository.getById(id)

      const ratings = await this._ratingsRepository.getById(id);
      return ratings;
    } catch (error) {
      throw error;
    }
  }
  async getAll(authenticatedUserId) {
    try {
      var authenticatedUserId = authenticatedUserId;
      const ratings = this._ratingsRepository.getAll();
      return ratings;
    } catch (error) {
      throw error;
    }
  }


  async findAllInvolvedratings(userId) {
    try {
      const allratings = await this._ratingsRepository.findAllInvolvedratings(
        userId
      );
      return allratings;
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
      const newratings = await this._ratingsRepository.create({ attributes });
      return newratings;
    } catch (error) {
      throw error;
    }
  }

  async update(id, attributes, authenticatedUserId) {

    var attributesToUse = Object.assign({}, attributes);
    try {
      var authenticatedUserId = authenticatedUserId;
      var ratings = await this._ratingsRepository.updateById(
        id,
        attributesToUse
      );
      return ratings;
    } catch (error) {
      throw error;
    }
  }
  async delete(id, authenticatedUserId) {
    try {
      var authenticatedUserId = authenticatedUserId;
      var ratings = await this._ratingsRepository.deleteById(id);
      return ratings;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RatingsService;