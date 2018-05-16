class ReviewsService {
  constructor({ reviewsValidator, reviewsRepository, usersRepository }) {
    this._reviewsValidator = reviewsValidator;
    this._reviewsRepository = reviewsRepository;
    this._usersRepository = usersRepository;
  }

  async create(attributes, authenticatedUserId) {
    try {
      if (~~attributes.user_id !== authenticatedUserId)
        throw new Error('NO_PERMISSION');
      attributes = await this._reviewsValidator.validate(
        attributes,
        'forCreate'
      );
      const newreviews = await this._reviewsRepository.create({ attributes });
      return newreviews;
    } catch (error) {
      throw error;
    }
  }
  async getById(id, authenticatedUserId) {
    try {
      // const user = await this._usersRepository.getById(id)
      // if(this.user.id!==authenticatedUserId){
      //   throw error
      // }
      const reviews = await this._reviewsRepository.getById(id);
      return reviews;
    } catch (error) {
      throw error;
    }
  }
  async getAll(authenticatedUserId) {
    try {
      var authenticatedUserId = authenticatedUserId;
      const reviews = this._reviewsRepository.getAll();
      return reviews;
    } catch (error) {
      throw error;
    }
  }
    async getByUserId(authenticatedUserId) {
    try {
      var authenticatedUserId = authenticatedUserId;
      const reviews = this._reviewsRepository.getByUserId(authenticatedUserId);
      return reviews;
    } catch (error) {
      throw error;
    }
  }


  async findAllInvolvedreviews(userId) {
    try {
      const allreviews = await this._reviewsRepository.findAllInvolvedreviews(
        userId
      );
      return allreviews;
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
      const newreviews = await this._reviewsRepository.create({ attributes });
      return newreviews;
    } catch (error) {
      throw error;
    }
  }

  async update(id, attributes, authenticatedUserId) {

    var attributesToUse = Object.assign({}, attributes);
    try {
      var authenticatedUserId = authenticatedUserId;
      var reviews = await this._reviewsRepository.updateById(
        id,
        attributesToUse
      );
      return reviews;
    } catch (error) {
      throw error;
    }
  }
  async delete(id, authenticatedUserId) {
    try {
      var authenticatedUserId = authenticatedUserId;
      var reviews = await this._reviewsRepository.deleteById(id);
      return reviews;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = ReviewsService;