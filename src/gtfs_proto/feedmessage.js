/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.transit_realtime.FeedMessage');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.transit_realtime.FeedEntity');
goog.require('proto.transit_realtime.FeedHeader');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transit_realtime.FeedMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 3, proto.transit_realtime.FeedMessage.repeatedFields_, null);
};
goog.inherits(proto.transit_realtime.FeedMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.transit_realtime.FeedMessage.displayName = 'proto.transit_realtime.FeedMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.transit_realtime.FeedMessage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transit_realtime.FeedMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.transit_realtime.FeedMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transit_realtime.FeedMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transit_realtime.FeedMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.transit_realtime.FeedHeader.toObject(includeInstance, f),
    entityList: jspb.Message.toObjectList(msg.getEntityList(),
    proto.transit_realtime.FeedEntity.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.transit_realtime.FeedMessage.extensions, proto.transit_realtime.FeedMessage.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transit_realtime.FeedMessage}
 */
proto.transit_realtime.FeedMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transit_realtime.FeedMessage;
  return proto.transit_realtime.FeedMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transit_realtime.FeedMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transit_realtime.FeedMessage}
 */
proto.transit_realtime.FeedMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.transit_realtime.FeedHeader;
      reader.readMessage(value,proto.transit_realtime.FeedHeader.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.transit_realtime.FeedEntity;
      reader.readMessage(value,proto.transit_realtime.FeedEntity.deserializeBinaryFromReader);
      msg.addEntity(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.transit_realtime.FeedMessage.extensionsBinary,
        proto.transit_realtime.FeedMessage.prototype.getExtension,
        proto.transit_realtime.FeedMessage.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transit_realtime.FeedMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transit_realtime.FeedMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transit_realtime.FeedMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transit_realtime.FeedMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.transit_realtime.FeedHeader.serializeBinaryToWriter
    );
  }
  f = message.getEntityList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.transit_realtime.FeedEntity.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.transit_realtime.FeedMessage.extensionsBinary, proto.transit_realtime.FeedMessage.prototype.getExtension);
};


/**
 * required FeedHeader header = 1;
 * @return {!proto.transit_realtime.FeedHeader}
 */
proto.transit_realtime.FeedMessage.prototype.getHeader = function() {
  return /** @type{!proto.transit_realtime.FeedHeader} */ (
    jspb.Message.getWrapperField(this, proto.transit_realtime.FeedHeader, 1, 1));
};


/** @param {!proto.transit_realtime.FeedHeader} value */
proto.transit_realtime.FeedMessage.prototype.setHeader = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.transit_realtime.FeedMessage.prototype.clearHeader = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.transit_realtime.FeedMessage.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated FeedEntity entity = 2;
 * @return {!Array<!proto.transit_realtime.FeedEntity>}
 */
proto.transit_realtime.FeedMessage.prototype.getEntityList = function() {
  return /** @type{!Array<!proto.transit_realtime.FeedEntity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.transit_realtime.FeedEntity, 2));
};


/** @param {!Array<!proto.transit_realtime.FeedEntity>} value */
proto.transit_realtime.FeedMessage.prototype.setEntityList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.transit_realtime.FeedEntity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.transit_realtime.FeedEntity}
 */
proto.transit_realtime.FeedMessage.prototype.addEntity = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.transit_realtime.FeedEntity, opt_index);
};


proto.transit_realtime.FeedMessage.prototype.clearEntityList = function() {
  this.setEntityList([]);
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldInfo>}
 */
proto.transit_realtime.FeedMessage.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.transit_realtime.FeedMessage.extensionsBinary = {};

