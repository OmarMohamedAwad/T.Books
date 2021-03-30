const USER_NAME_REQUIRED = "The user name is required";
const USER_NAME_MIN_LENGTH = "User name must contain at least 4 character";
const USER_NAME_MAX_LENGTH = "User name must contain at most 50 character";
const USER_NAME_UNIQUE = "User name must be unique";

const PASSWORD_MIN_LENGTH = "The password must be at least 6 characters";
const PASSWORD_REQUIRED ="The password is required";

const FIRST_NAME_REQUIRED = "First name is requierd";
const FIRST_NAME_MIN_LENGTH = "First name must contain at least 2 character";
const FIRST_NAME_MAX_LENGTH = "First name must contain at most 50 character";
const LAST_NAME_REQUIRED = "Last name is requierd";
const LAST_NAME_MIN_LENGTH = "Last name must contain at least 2 character";
const LAST_NAME_MAX_LENGTH = "Last name must contain at most 50 character";
const DATE_OF_BIRTH_REQUIRED = "Date of birth is requierd";
const FIRST_LAST_NAME_UNIQUE = "First name with last name must be unique";

const BOOk_NAME_UNIQUE_ERROR_MESSAGE = "Book name must be unique";
const BOOk_NAME_REQUIRED_ERROR_MESSAGE = "Book name is required";
const BOOk_NAME_MIN_LENGTH_ERROR_MESSAGE = "Book name must contain at least 2 character";
const BOOk_NAME_MAX_LENGTH_ERROR_MESSAGE = "Book name must contain at most 50 character";

const BOOk_DESCRIPTION_UNIQUE_ERROR_MESSAGE = "Book description must be unique";
const BOOk_DESCRIPTION_REQUIRED_ERROR_MESSAGE = "Book description is required";
const BOOk_DESCRIPTION_MIN_LENGTH_ERROR_MESSAGE = "Book description must contain at least 10 character";
const BOOk_DESCRIPTION_MAN_LENGTH_ERROR_MESSAGE = "Book name must contain at most 250 character";

const BOOk_IMAGE_UNIQUE_ERROR_MESSAGE = "Book image must be unique";
const BOOk_IMAGE_REQUIRED_ERROR_MESSAGE = "Book image is required";

const REVIEW_BODY_MIN_LENGTH = "Review body must contain at least 2 character";
const REVIEW_BODY_MAX_LENGTH = "Review body must contain at most 300 character";
const REVIEWER_REQUIRED = "Reviewer id is requierd";
const REVIEWED_BOOK_REQUIRED = "Reviewed book is requierd";

const CATEGORY_NAME_REQUIRED = "Category name is requierd";
const CATEGORY_NAME_UNIQUE = "Category name should be unique";
const CATEGORY_NAME_MIN_LENGTH = "Category name must contain at least 2 character";
const CATEGORY_NAME_MAX_LENGTH = "Category name must contain at most 30 character";
const CATEGORY_IMAGE_REQUIRED = "Category image is requierd";

const RATE_IS_REQUIRED = "Rate can't be empty"
const RATE_MINIMUM_CONSTRAINT = "Rate can't be less than 0"
const RATE_MAXIMUM_CONSTRAINT = "Rate can't be more than 5"
module.exports = {
    FIRST_NAME_REQUIRED,
    FIRST_NAME_MIN_LENGTH,
    FIRST_NAME_MAX_LENGTH,
    LAST_NAME_REQUIRED,
    LAST_NAME_MIN_LENGTH,
    LAST_NAME_MAX_LENGTH,
    DATE_OF_BIRTH_REQUIRED,
    FIRST_LAST_NAME_UNIQUE,
    USER_NAME_REQUIRED,
    USER_NAME_MIN_LENGTH,
    USER_NAME_MAX_LENGTH,
    USER_NAME_UNIQUE,
    PASSWORD_MIN_LENGTH,
    PASSWORD_REQUIRED,
    BOOk_NAME_UNIQUE_ERROR_MESSAGE,
    BOOk_NAME_REQUIRED_ERROR_MESSAGE,
    BOOk_NAME_MIN_LENGTH_ERROR_MESSAGE,
    BOOk_NAME_MAX_LENGTH_ERROR_MESSAGE,
    BOOk_DESCRIPTION_UNIQUE_ERROR_MESSAGE,
    BOOk_DESCRIPTION_REQUIRED_ERROR_MESSAGE,
    BOOk_DESCRIPTION_MIN_LENGTH_ERROR_MESSAGE,
    BOOk_DESCRIPTION_MAN_LENGTH_ERROR_MESSAGE,
    BOOk_IMAGE_UNIQUE_ERROR_MESSAGE,
    BOOk_IMAGE_REQUIRED_ERROR_MESSAGE, 
    REVIEWER_REQUIRED,
    REVIEWED_BOOK_REQUIRED,
    REVIEW_BODY_MIN_LENGTH,
    REVIEW_BODY_MAX_LENGTH,
    CATEGORY_NAME_REQUIRED,
    CATEGORY_NAME_UNIQUE,
    CATEGORY_NAME_MIN_LENGTH,
    CATEGORY_NAME_MAX_LENGTH,
    CATEGORY_IMAGE_REQUIRED,
}
