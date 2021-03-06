<?php

namespace Drupal\covid\Normalizer;

use Drupal\Core\Field\Plugin\Field\FieldType\StringLongItem;
use Drupal\Core\TypedData\Plugin\DataType\StringData;
use Drupal\link\Plugin\Field\FieldType\LinkItem;
use Drupal\serialization\Normalizer\TypedDataNormalizer;

/**
 * Class Normalizer.
 *
 * @package Drupal\covid
 */
class Normalizer extends TypedDataNormalizer {

  /**
   * {@inheritdoc}
   */
  public function normalize($object, $format = NULL, array $context = []) {
    $data = parent::normalize($object, $format, $context);
    $parent = $object->getParent();

    if (in_array(get_class($object), [StringData::class, StringLongItem::class])) {
      if ($parent instanceof LinkItem && $object->getString() === "") {
        $parsedUrl = parse_url($parent->get('uri')->getValue());
        $url = '';
        foreach (['host', 'path'] as $part) {
          if (isset($parsedUrl[$part])) {
            $url .= $parsedUrl[$part];
          }
        }
        return $url;
      }

      $space = html_entity_decode("&nbsp;");

      return mb_ereg_replace('(?<![<-])\b(\w(?:\b|\.?))(<? )', "\\1$space", $object->getString());
    }

    if ($object->getName() == 'uri' && $parent instanceof LinkItem && !$parent->isExternal()) {
      return $parent->getUrl()->toString();
    }

    return $data;
  }


}
